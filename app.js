 window.addEventListener("load", function () {
        var welcomeMessage = "Welcome to my page! Enjoy your visit🥰.";
        alert(welcomeMessage);
      });
      function updateHeading(newHeading) {
        let heading = document.querySelector("h3");
        heading.innerHTML = newHeading;
      }
      function garden() {
        let name = prompt("What is your name?");
        let email = prompt("Please enter your email address");
        let answer = prompt("Are you interested in backyard gardening? Yes/No");
        if (answer !== null) {
          answer = answer.toLowerCase().trim();
          if (answer === "yes") {
            updateHeading(
              `Hello, ${name}👋! Welcome to the wonderful world of backyard gardening🌱🤗.  Please check your email for detailed information on how to get started and make the most of your gardening journey📩`
            );
          } else {
            updateHeading(
              `We understand, ${name}😔.If you ever develop an interest in backyard gardening, we'd be thrilled to assist you. Feel free to reach out whenever you're ready to embark on this rewarding journey! 😊🌱`
            );
          }
        } else {
          updateHeading(
            "You canceled the prompt. Please try again if you're interested!"
          );
        }
      }
      let backyardGarden = document.querySelector("button");
      backyardGarden.addEventListener("click", garden);