<h1>𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔-𝐌𝐃</h1>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>

<div align="center" class= "main"> 
  <img src="https://i.ibb.co/h8fkrRF/In-Shot-20241129-183242921.jpg"width="300" height="300"/>


  <𝐌𝐑 𝐃𝐈𝐍𝐄𝐒𝐇 𝐔𝐏𝐃𝐀𝐓𝐄>


    
    
   <h1>voice aded by senuji & mihiri </h1>

    

  

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>

    




<b>GET SESSION ID VIA PAIR CODE 01</b>

<p align="left">
<a href="https://sobia-md-pair.onrender.com/pair"><img height= "35" title="Author" src="https://img.shields.io/badge/Session-black?style=for-the-badge&logo=render"></a>
<p/>
<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>








<b>COPY WORKFLOW CODE</b></br>
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```
