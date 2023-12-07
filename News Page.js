
function simulateLike() {
    // Get the button element
    const likeButton = document.getElementById('likeButton');

    // Simulate the like action (change button appearance or behavior)
    likeButton.innerHTML = 'Liked!';
    likeButton.style.backgroundColor = 'blue';
    likeButton.style.color = 'white';
    likeButton.disabled = true; // Disable the button after "liking"

    // You can also perform other actions here, such as sending a request to a server

    // Simulate reverting the like after a delay (optional)
    setTimeout(() => {
      likeButton.innerHTML = 'Like';
      likeButton.style.backgroundColor = '';
      likeButton.style.color = '';
      likeButton.disabled = false;
    }, 2000); // Revert the like after 2 seconds (2000 milliseconds)
  }

let b = document.querySelector('button');
setTimeout(()=>b.focus(), 100);
setTimeout(()=>b.blur(), 1000);

document.addEventListener('DOMContentLoaded', function() {
  // This function will run after the DOM has fully loaded

  // Get the username from sessionStorage
  var storedUsername = sessionStorage.getItem('username');

  // Find the element with the class "username" and set its text content
  var usernameDiv = document.querySelector('.username');
  if (usernameDiv && storedUsername) {
    usernameDiv.textContent = storedUsername;
  }

  const commentButton = document.getElementById('comment-button');
  const commentSection = document.querySelector('.comment-section');
  const postCommentBtn = document.querySelector('.post-comment');
  const commentInput = document.querySelector('.comment-input');
  const commentDisplay = document.querySelector('.comment-display');


  // Event listener for the comment button
  commentButton.addEventListener('click', () => {
    commentSection.classList.toggle('active');
  });

  // Event listener for posting a comment
  postCommentBtn.addEventListener('click', () => {
      commentDisplay.classList.add('active');
      const commentText = commentInput.value.trim();
    
      if (commentText !== '') {
        const commentElement = document.createElement('div');
    
        // Get the username from sessionStorage
        const userName = sessionStorage.getItem('username');
    
        // Get the current date and time
        const currentTime = new Date().toLocaleString();
    
        // Create a div for username and date
        const userDateDiv = document.createElement('div');
        userDateDiv.classList.add('Comment-Author');
        userDateDiv.textContent = `${userName} - ${currentTime}`;
        commentElement.appendChild(userDateDiv);
    
        // Create a div for the comment text
        const commentTextDiv = document.createElement('div');
        commentTextDiv.textContent = commentText;
        commentTextDiv.classList.add('comment');
        commentElement.appendChild(commentTextDiv);
    
        // Append the comment to the commentDisplay
        const commentDisplay = document.querySelector('.comment-display');
        commentDisplay.insertBefore(commentElement, commentDisplay.firstChild);
    
        // Clear the input after posting
        commentInput.value = '';

        localStorage.setItem('commentDisplayContent', commentDisplay.innerHTML);
      }
  });
    // Check if there's content in localStorage for comment-display
    const savedCommentDisplayContent = localStorage.getItem('commentDisplayContent');
    if (savedCommentDisplayContent) {
      // Set the comment-display content to the saved content from localStorage
      commentDisplay.innerHTML = savedCommentDisplayContent;
      // Show the comment display
      commentDisplay.classList.add('active');
    }
});