=============
Python shells
=============

Source of this lab is hosted at: https://gitlab.com/jans-workshops/python-shells

You can use python in multiple ways, not only writing the code in ``.py`` files but also interactively use any of available python shells.

Good practice is to use separate virtual environment for every task, if you do now know what virutal environment is.
I recommend you to learn about: `pip <pip_lab_>`_ and `virtual environments <venvs_lab_>`_ before you start this lab.
So you can keep your python environment clean.

You will learn about

* default ``python`` interactive shell
* ipython_
* `ptpython <ptpython_git_>`_
* `jupyter notebook <jupyter_org_>`_



Here you will learn about different python shells and how to use them.
Purpose of this lab is to give you the options to choose best tool which suites you,
therefore we will briefly demostrate the features of each python shell.

python shell
------------

``python`` shell is default python interactive shell supplied with every version of python.

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.

#. Star python shell with command ``python`` (or ``python3``)

   * You will enter into interactive shell

   .. code-block:: text

    Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 03:03:55)
    [GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>>

#. type: ``import this`` and press ``[Enter]`` and you will be presented with the zen of python.

Let's do something useful.

Type the code from the code block into your shell and
press ``[Enter]`` after each block of code you write.

#. Import ``pi`` constant from module ``math``

.. code-block:: python

 from math import pi


#. Assign radius variable ``radius``:

.. code-block:: python

 radius = 3


#. Calculate the area of the circle

   .. code-block:: python

    pi * radius**2


   * Now your result should look like this:

   .. code-block:: python

    >>> pi * radius**2
    28.274333882308138

#. In previous step we used direct output from the shell to display the value.
   This time we display the value with a meaningful message.

   #. Assign the result of previous calculation to a variable:

   .. code-block:: python

     area = pi * radius**2

   #. Print the message with result

   .. code-block:: python

    print(f"The area of circle with radius of {radius} cm is {area} cm^2" )

   * You should get the following output:

   .. code-block:: text

    The area of circle with radius of 2 cm is 12.566370614359172 cm^2

#. Almost every python it's good practice to write docstring for your modules, packages, classes and functions.
   Then one can easily read the help directly in shell instead of searching the documentation on the web.
   To display the help use built-in help function:

   .. code-block::python

    help(print)
    help(int)

#. To exit the shell use function:

.. code-block:: python

 exit()


ipython shell
--------------

Is bit more advanced shell, with command completion ``[Tab]`` and colours.
To use command completion type word partially and press ``[Tab]``:

   * e.g. Type ``imp`` hit ``[Tab]`` and result will be ``import``

It's not installed by default, so you need to install it with ``pip``
We will try to calculate the area of the circle again to observe the difference.


#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.
   * Optional step: ``create new virtual environment``

#. Install ipython

   .. code-block:: bash

    pip install ipython


#. Once installed, start it by using command: ``ipython``

   * You can already notice a difference just by looking at the image.

   .. image:: resources/images/ipython_1.png

#. Import ``pi`` constant from module ``math``

   .. code-block:: python

      from math import pi


#. Assign radius variable ``radius``:

.. code-block:: python

 radius = 3


#. Calculate the area of the circle

   .. code-block:: python

    pi * radius**2


   * The output looks different then from standard shell
   * ``In [6]`` - marks the input
   * ``Out[6]`` - marks the output, the number is tied to input cell

   .. code-block:: python

    In [6]: pi * radius**2
    Out[6]: 12.566370614359172

#. In previous step we used direct output from the shell to display the value.
   This time we display the value with a meaningful message and print it to the standard output.

   #. Assign the result of previous calculation to a variable:

   .. code-block:: python

     area = pi * radius**2

   #. Print the message with result

   .. code-block:: python

    print(f"The area of circle with radius of {radius} cm is {area} cm^2" )

   * As you can see, result of print function is not registered as ``Out[#]``

   .. code-block:: python

    In [8]: print(f"The area of circle with radius of {radius} cm is {area} cm^2" )
    The area of circle with radius of 2 cm is 12.566370614359172 cm^2


``ipython`` has some advantages like magic functions, you can try them bellow

#. To view the history of your inputs type: ``%history``

You can also manipulate with file system for example.

#. List current directory ``%ls``
#. Make directory ``%mkdir directory``
#. Change current directory with ``%cd directory``

   * Now you current working directory is ``directory``
   * You can check your current working directory in python using following code:

   .. code-block:: python

    import os

    os.getcwd()

#. To exit the shell use function:

.. code-block:: python

 exit()

Now you know how to use built in python shell.

ptpython
--------

Is even more advanced python shell which I usually prefer.
You can do everything like in ``ipython`` plus something more and it looks better.
It also offers integration with ``ipython``.
Ptypython supports 2 editor modes ``emacs`` and ``vi``.
It is also not installed by default.
For more information check `ptpython Github page <ptpython_git>`_.

You can reuse venv from previous task or create new.

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.
   * Optional step: ``create new virtual environment``

#. Install ptpython

   .. code-block:: bash

    pip install ptpython


#. Once installed, start it by using command: ``ptpython``.

#. Press ``[F2]`` to get into the menu

   * Turn ``on`` few features: ``show signature``, ``show docstring``

   .. image:: resources/images/ptpython_1.png
      :height: 400px
      :width: 250px

#. Now press ``[ENTER]`` to hide the menu.

Let's try the calculation from previous example but let's use ``pow`` function.

#. Type the following code:

   .. code-block:: python

    from math import pi
    radius = 3

   * You may notice that ptpython is giving you tips while you are typing, which is pretty handy right?

#. Let's calculate the area and print the result.

   * Type the code and hit ``[Enter]`` after each line.

   .. code-block:: python

    area = pi * pow(radius, 2)
    print(f"The area of circle with radius of {radius} cm is {area} cm^2" )

#. To display your input history hit ``[F3]``

   * In history window you can select inputs to send as a bulk using ``[Space]`` and ``[Enter]``.

#. Exit ptpython shell using function ``exit()``.


As you may noticed, there is more going on your screen.
``ptpython`` helps you with code completion, shows method signatures and also displays documentation embedded in python code.
So you do not need to use ``help()`` function.

.. image:: resources/images/ptpython_2.png
   :height: 329px
   :width: 600px

Now you know how to use ptpython!

Jupyter notebook
----------------

Jupyter notebook is python shell running as a web app in your browser.
Project jupyter is used by many Engineers or Scientists and supports more languages than just ``python``.
Jupyter is built on top of the ``ipython`` so it has many things in common.

Jupyter offers a lot of keyboard shortcuts to speed up the work.
But these are essential you can use during this task.

* ``[Tab]`` - code completion
* ``[Shift]+[Enter]`` - execute cell
* ``[Shift]+[Tab]`` - display docstring and signature

To learn more about shortcuts, check help!

Let's try Jupyter notebook.
If you have never worked with notebook style app before, here is a brief info:

* Each notebook is running it's own kernel.
* All code is written into cell blocks, which you can execute.
* You can print the output, or let jupyter to handle the output for you.
* Executing the cell block writes data into a notebook memory, which means that you can access results from other cells.
* If you want to cleanup this memory, simply restart the kernel.

Again I advice to start in a new folder and clean virtual env.

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.
   * Optional step: ``create new virtual environment``

#. Install jupyter

   .. code-block:: bash

    pip install jupyter

   * If you have pipenv installed, check ``pipenv graph`` to see the dependency list.

#. Once installed run command: ``jupyter notebook`` to open the app.

   * Command above starts local web server (watch the output in console) on address ``localhost:8888``
   * If everything went well, your browser should open on a landing page.

   .. image:: resources/images/jupyter_1.png

#. Click ``new`` (upper right corner)
#. Select ``Python 3``

   * This has openned you window with your notebook

   .. image:: resources/images/jupyter_2.png

#. Change the name of this notebook to something like ``Circle Area``
#. Now change the cell type to ``Markdown`` and insert following code:

.. code-block:: text

    # Circlle area
    $A = \pi r^2$

#. Hit ``[Shift]+[Enter]`` to execute the cell and observe the result.

    Result has just been translated into markdown and LaTeX!

Let's write some python code now.

#. In next cell enter following code (if you are typing the code, you can try keyboard shortcuts listed above)

.. code-block:: python

    from math import pi, pow

    radius = 3
    area = pi * pow(radius, 2)
    print(f"The area of circle with radius of {radius} cm is {area} cm^2" )

   * Jupyter notebook is also capable of displaying output directly from variable or function as Ipython.
     It only displays the output of the last function or variable in cell

#. Hit ``[Shift]+[Enter]`` to run the cell.

You have successfully printed the output.

#. In next cell type ``area`` and hit ``[Shift]+[Enter]`` to see the output.

   * The output of a variable ``area`` is the same as in previous cell. Variables from all cells are shared in notebook memory.

#. Display all active variables with magic command: ``%whos`` and hit ``[Shift]+[Enter]`` to execute.

#. Jupyter notebook is also capable of *prettifying* the output for you. Next task will show
   Write the following code and execute the cell.

   .. code-block:: python

       from string import ascii_uppercase
       # create alphabet dictionary {letter:index}
       alphabet = {ltr:idx for idx,ltr in enumerate(ascii_uppercase)}
       print(alphabet)

#. In next cell type this and execute the cell with ``[Shift]+[Enter]``

   .. code-block:: python

    alphabet

   * Jupyter has handled the output for you and tried to optimize it for better readability.




Congratulations, you have finished all the tasks and learned about different python interpreters you can use.

Resources
---------

* `ptpython Github page <ptpython_git>`_
* `nice blog post about ptpython <ptpython_blog_post>`_
* `I python page <ipython_>`_
* `Project jupyter website <jupyter_org>`_
* `Jupyter beginner guide <jupyter_quick_start>`_

.. _ipython: https://ipython.org
.. _ptpython_git: https://github.com/jonathanslenders/ptpython
.. _ptpython_blog_post: https://terriblecode.com/blog/why-ptpython-is-the-only-repl-you-will-ever-need/
.. _jupyter_org: http://jupyter.org
.. _jupyter_quick_start: http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html#what-is-the-jupyter-notebook
.. _pip_lab: https://gitlab.com/jans-workshops/pip-lab
.. _venvs_lab: https://gitlab.com/jans-workshops/python-virtual-environments