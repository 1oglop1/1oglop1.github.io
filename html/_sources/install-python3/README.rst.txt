======================
How to install python3
======================

Source of this lab is hosted at: https://gitlab.com/jans-workshops/install-python3

Simplified guide on how to install python3 on your computer.


Windows
-------

1. Go to: https://www.python.org/downloads/
2. Click button: ``Download Python 3.#.#``

.. image:: resources/images/download_python3_win.png

3. Open installer ``Python 3.#.#.exe``
4. Check Add Python to PATH

.. image:: resources/images/install_win_1.png

5. Click Customize installation
6. On next screen check all boxes and click next
7. In Advanced options make sure you have checked following:
   1. Add Python to environment variables
   2. Change the installation location to: ``C:\Users\<Your-UserName>\Python\Python36-XX`` (XX is a version number)

.. image:: resources/images/install_win_2.png

8. Click install
9 You are finished with this lab!

Mac
---
1. Go to: https://www.python.org/downloads/
2. Click button: ``Download Python 3.#.#``
3. Open ``pkg`` installer and follow the instructions.


.. image:: resources/images/download_python3_mac.png

   
Linux
-----

Depends your distribution.
You can always install python3 from source. Which can be found at https://www.python.org/downloads/.

Ubuntu (16.10+): `apt install python3.6`
Fedora 26+: should include python 3.6, previous versions: ``dnf install python36``
Centos 7: follow this guide https://janikarhunen.fi/how-to-install-python-3-6-1-on-centos-7.html


===============
Try your python
===============

Once your python is installed you can try it:

#. Open the terminal emulator.

   * Mac OSx: hit ``[CMD]+[Space]`` and type ``terminal.app``
   * Windows: hit ``[WIN-key]+[R]`` and type ``powershell`` (or you can search for ``powershell`` in start menu.

#. Type command:
   
   .. code-block:: bash

    python -V
    
   * Output should give you version of your python 3. 
   
   .. code-block:: text

    Python 3.6.X
    
   * If your system replies with ``Python 2.7.X`` use the command:
   
   .. code-block:: bash
   
    python3 -V
    
   * Mac\Linux TIP: if you do not want to type ``python3`` every time add it as an alias for your user.
     To make alias permanent check this site: https://jonsuh.com/blog/bash-command-line-shortcuts/
  
   .. code-block:: bash
  
    alias python="python3"
    
#. Start the python shell with command:
   
   .. code-block:: bash
   
    python

   * Command above will start python shell
   
   .. code-block:: text
   
    Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 03:03:55) 
    [GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 

#. Type the code below and hit ``[Enter]`` to display the Zen of python.

   .. code-block:: python
   
    import this
    
#. To exit the shell type: 

   .. code-block:: python

    exit()
    
Great! You have successfully installed python.