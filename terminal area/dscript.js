let terminal = document.getElementById('terminal');
let input = document.getElementById('input');
let output = document.getElementById('output');

// initialize variables properly
let karma_x = false;
let area = "pebbles";
let cplung = false;
let have_heart = false;
let have_intel = false;
let ening_type = "a"

output.innerHTML += `user > pebbles interface successful:<br>`;

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    let command = input.value.trim().toLowerCase();
    input.value = '';
    output.innerHTML += `$user> ${command}<br>`;

    // --- HELP COMMAND ---
    if (command === 'help') {
      output.innerHTML += `Available commands:<br>`;
      output.innerHTML += `- help : Show this help message<br>`;
      output.innerHTML += `- templat [your text] : Print your text<br>`;
      output.innerHTML += `<pre>
       .--.
      |o_o |
      |:_/ |
     //   \\\\ 
    (|     | )
    /'\\_   _/\\
    \\___)=(___/
      </pre>`;
    }

    // --- PEBBLES COMMAND ---
    else if (command === 'pebels') {
      karma_x = true;
      have_intel = true;
      output.innerHTML += `You seem to gain a higher understanding of the world.<br>`;
    }

    // --- ACCEND COMMAND ---
    else if (command === 'accend') {
      if (!karma_x) {
        output.innerHTML += `- You do not have the capabilities nor the mind<br>`;
      } else {
        output.innerHTML += `- Pebbles tells you that beyond the farm arrays, ascension is possible.<br>`;
      }
    }

    // --- FARM ARRAYS COMMAND ---
    else if (command === 'farm arrays') {
      area = "farm arrays";
      output.innerHTML += `- You make the long journey to the farm arrays and push on further toward the voided lake.<br>`;
      cplung = true;
    }

    // --- PLUNG COMMAND ---
    else if (command === 'plung') {
      if (!cplung) {
        output.innerHTML += `- There is nowhere to plunge into.<br>`;
      } else {
        output.innerHTML += `- You plunge into the void...<br>`;
		ending_type = "a"
        setTimeout(() => {
          window.location.href = "ending_a.html"; // go to ending page after 3s
        }, 3000);
		
      }
    }

    // --- HEART TRANSPLANT COMMAND ---
    else if (command === 'heart transplant') {
      if (area === "pebbles") {
        have_heart = true;
        output.innerHTML += `- You jump up and take Pebbles' heart.<br>`;
      } else if (area === "looks to the moon") {
        output.innerHTML += `- You give the heart to Looks to the Moon, and he wakes up.<br>`;
		ening_type = "b"
		setTimeout(() => {
			window.location.href = "ending_b.html"; // go to ending page after 3s
        }, 3000);
		
      } else {
        output.innerHTML += `- Why do you want to do this?<br>`;
      }
    }

    // --- LOOK TO THE MOON COMMAND ---
    else if (command === 'looks to the moon') {
      output.innerHTML += `- You head through the shoreline and meet Looks to the Moon.<br>`;
      area = "looks to the moon";
    }

    // --- UNKNOWN COMMAND ---
    else {
      output.innerHTML += `Unknown command: ${command}<br>`;
    }

    // keep the output scrolled to bottom
    terminal.scrollTop = terminal.scrollHeight;
  }
});
