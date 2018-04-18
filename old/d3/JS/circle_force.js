/**
 * Created by jgazda on 22-Aug-16.
 */


d3.json("../JSON/graph.json", function (error, graph){
    if (error) throw error;
    if(graph) main(graph);
});

var width = window.innerWidth;
var height = window.innerHeight;
var base_font_size = 12;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border","thin solid blue");


var zoom_box = svg.append("g").attr("id", "zoom_box");
var min_zoom = 0.1;
var max_zoom = 12;
var zoom = d3.zoom().scaleExtent([min_zoom,max_zoom]);

zoom.on("zoom", zooming);
svg.call(zoom);

function zooming() {
    var transform = d3.event.transform;
    zoom_box.attr("transform", transform)
	}

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-900))
    .force("center", d3.forceCenter(width / 2, height / 2));



function main(graph){

  var link = zoom_box.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

  var node = zoom_box.append("g")
      .classed("nodes", true)
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", function (d) { return "node " + d.label;})
    .attr("id", function (d) { return "n" + d.id;})
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("circle").attr("r", 30);



  node.append("text")
      .attr("class", "wrap")
      .attr("dy",0)
      .style("text-anchor","middle")
      .style("font-size", base_font_size)
      .style("dominant-baseline", "central")
      .text(function(d) { return d.name; });

  //  apply text wrap on nodes
  ctw.textwrap().container(node).draw();

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    //  update link position
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

     // update node position
     node.attr("transform", function (d) {
       return "translate(" + d.x + "," + d.y + ")"; });
  }

}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}