const newCommentHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#comment").value.trim();
  const post_id = window.location.toString().split("/").pop();

  if (text) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector("#postBtn").addEventListener("click", newCommentHandler);
