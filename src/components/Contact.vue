<template>
  <section class="resume-section" id="contact">
      <h2>Contact</h2>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>Your Name: </label>
          <input type="text" name="name" />   
        </p>
        <p>
          <label>Your Email: </label>
          <input type="email" name="email" />
        </p>
        <p>
          <label>Message: </label>
          <textarea name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
  </section>
</template>

<style lang="scss" scoped>
form {
  width: 40rem;
  max-width: 100%;
  label, input, textarea {
    display: block;
    width: 100%;
  }
  label {
    
  }
  textarea {
    height: 10rem;
  }
  button[type="submit"] {
    background-color: $primary;
    color: $white;
    border: 0;
    font-size: 1em;
    margin-top: 1em;
    padding: .5rem 1rem;
    border-radius: 3px;
    &:hover,
    &:focus {
      background-color: $secondary;
    }
  }
}
</style>