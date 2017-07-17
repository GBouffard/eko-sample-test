'use strict';

let buttonContainer = document.createElement('div');

let buttonContainerContent = `
  <button id="lie">Lie</button>
  <button id="truth">Tell the truth</button>:
`;


let buttonStyle = 
`
  .buttonContainer {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
  }  

   #lie, #truth{
    background-color: green;
    color: white;
    padding: 1rem;
    border: 0;
    margin: 1rem;
    cursor: pointer;
  }
`;

let buttonStyleElement = document.createElement('style');
buttonStyleElement.innerHTML = buttonStyle; 
document.body.appendChild(buttonStyleElement);

buttonContainer.classList.add('buttonContainer');
buttonContainer.innerHTML = buttonContainerContent;

let lieButton = buttonContainer.querySelector('#lie');
let truthButton = buttonContainer.querySelector('#truth');

define(function() {
  return function(player, context) {
    player.overlays.add('buttonContainer', buttonContainer, { visible: false });
    
    player.repository.get('node_intro_loop_9ff125').on('nodestart', function() {
      player.overlays.show('buttonContainer');
    });
    
    player.repository.get('node_intro_loop_9ff125').addPrefetch('node_lie_63d6b2');
    player.repository.get('node_intro_loop_9ff125').addPrefetch('node_truth_3a74a6');
    
    lieButton.addEventListener('click', function() {
      player.seek('node_lie_63d6b2');
      player.overlays.hide('buttonContainer');
    });
    
    truthButton.addEventListener('click', function() {
      player.seek('node_truth_3a74a6');
      player.overlays.hide('buttonContainer');
    });
  };
});
