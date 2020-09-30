import React, { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  return (
    <form onSubmit={() => {}}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your e-mail here..."
      />
      <button type="button">Send</button>
    </form>
  );
}

export default SubscribeForm;
