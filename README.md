:dolphin: Testing Eko :dolphin:
=================
Interactive video in the browser 

Where
----
http://studio.helloeko.com
- Create a project
- upload videos (usual formats accepted / uncompressed videos are recommended)
- drag videos on the board, and link them manually
  nb: some links can actually be loops-videos, the time that a user makes a choice


Installation
----
```
npm install -g @ekolabs/eko
```
then in command line
```
eko project checkout --name=ec9018a7-6026-4900-a6ff-64ec2821aa9c
( with ec9018a7-6026-4900-a6ff-64ec2821aa9c being the project ID from the eko project )
```
Then
```
eko project test --dev 
```
Within the repo, src/js /app.js is the source of the code 

Eko API
----
https://developer.helloeko.com/api/

useful additional information:
the code can also be edited within the eko platform;
the tiny forking button leads to a tab to open the internal code panel.
There is a push button, to push changes within the eko repo (with a commit message to add).
There is also preview and publish buttons.

```
in the eko platform, we can right click on the element "get element ID" (at the bottom)
- then and copy on clipboard to then paste and use in our code

player.seek() is part of the eko api to jump to the next node (video part) to be read 
but it will jump with a delay...unless we prefetch videos when one is already being read;
This is why in our code, we use .addPrefetch()
  
Then, we can do push and add the name of the commit 
(we can also pull locally) 
  
Publish button --> will publish 
then there is a link to access the project on the Eko platform (just like we would on Youtube)
```

Eko Example: One on One vs the Detroit Pistons 
----
https://pistons.palacenet.com/