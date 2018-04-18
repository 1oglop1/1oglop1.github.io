=======
pip Lab
=======

Source of this lab is hosted at: https://gitlab.com/jans-workshops/pip-lab

Pip is python package manager.
In this Hands-On lab you will learn how to install and use ``pip``.
All ``python`` commands expect you to use ``python3``.

How it works?
-------------

By defalt pip uses PyPI_ - the Python Package Index repository to store installable python packages.
It is also possible to configure the pip and use it with your private repository, but this is out of scope of this lab.

Packages installed with pip can be stored at various places such as:

* system-site - is default system-wide storage directory
* user-site - is typically located in users profile directory
* `virtual environment <venv_lab>`_ - location is same as virtual env settings: ``.virtualenvs/<ENV NAME>/lib/python3.6/site-packages``


.. _install_pip:

Install pip
-----------

Some python installation ships with pip already installed if this is your case, feel free to skip this task.
There is (usually) no harm if you try to install pip anyway.

#. Open the terminal emulator

   * Quick how to tutorial how to `open terminal`_
    
#. Test if pip is installed: ``pip -V``

   * Result looks similar to this if pip is installed: ``pip 9.0.3 from /Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/site-packages (python 3.6)``
   
#. Download file: https://bootstrap.pypa.io/get-pip.py
#. In your terminal navigate to the folder where did you download the file
   
   * To change the directory in terminal use command ``cd <path to the direcory>``
      * Mac: ``cd ~/Downloads``
      * Win: ``cd c:\users\<your username>\Downloads``

#. Run the command ``python get-pip.py`` (you might need to use ``sudo`` on your system)
    
   * ``sudo python get-pip.py``
    
#. If everything went good, you get the message:

   * ``Successfully installed pip-9.0.3 setuptools-39.0.1 wheel-0.30.0``

.. _using_pip:

Using pip
---------


Before installing the package make sure you are using correct ``pip`` for **python3**

#. ``pip -V`` - display version, location, python

   * if result of this command says you are using ``pip`` with ``python 2.7`` and you are using ``python3``
   * use ``pip3`` in subsequent examples or create an alias: ``alias pip=pip3``
   
#. ``pip help`` - display the help how to use the ``pip``

   * ``pip help <command>`` or ``pip <command> -h``- display help for command
    
#. ``pip install SomePackage`` - installs demo package from PyPI_
#. ``pip show SomePackage`` - show information about one or more installed packages
#. ``pip install SomePackage -U`` - upgrade package
#. ``pip install SomePackage==0.1.0`` - install particular version ``<=``, ``>=``

   * Note: this commands fails due to missing version ``0.1.0`` of ``SomePackage``
   * There are many more options for installation, check `pip install`_ documentation page.

#. ``pip list`` - List installed packages
#. ``pip list --outdated`` - List installed packages which are out of date.
#. ``pip freeze`` - output installed packages in requirements format
    
   Now if your project is finished and you want to distribute it, you can write down ``requirements`` file in the same format or create it like this:
   
   #. ``pip freeze > requirements.txt``

#. Uninstall our demo package with ``pip uninstall SomePackage``

#. ``pip install -r requirements.txt`` - install it again from a requirements file

#. ``pip uninstall SomePackage`` to remove the package.

Now you have learned how to you ``pip``!

.. _resources:

Resources
---------

* pip documentation: https://pip.pypa.io/en/stable/
* official installation manual: https://pip.pypa.io/en/stable/installing/#installing-with-get-pip-py
* PyPI https://pypi.python.org/pypi - will soon be replaced by https://pypi.org

.. _`open terminal`: http://www.dummies.com/programming/c/how-to-conjure-a-terminal-window-in-c-programming/
.. _PyPI: https://pypi.python.org/pypi
.. _pip install: https://pip.pypa.io/en/stable/reference/pip_install/
.. _venvs_lab: https://gitlab.com/jans-workshops/python-virtual-environments



