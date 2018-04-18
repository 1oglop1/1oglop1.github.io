/**
 * Created by jgazda on 22-Aug-16.
 */


d3.json("../JSON/miserables.json", function (error, graph){
    if (error) throw error;
    if(graph) main(graph);
});

var width = window.innerWidth;
var height = window.innerHeight;

var svg_tag = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border","thin solid blue");


var zoom_box = svg_tag.append("g").attr("id", "zoom_box");
var nodesGroup = zoom_box.append("g").attr("id", "nodesGroup");
var nodesAll = nodesGroup.selectAll(".node");
var linksGroup = zoom_box.append("g").attr("id", "linksGroup");
var linksAll = linksGroup.selectAll(".link");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

function main(){

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 2.5)
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
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