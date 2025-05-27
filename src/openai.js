const sendMessage = async (userInput) => {
  const res = await fetch("/.netlify/functions/chatgpt", {
    method: "POST",
    body: JSON.stringify({ message: userInput }),
  });

  const data = await res.json();
  return data.reply;
};
