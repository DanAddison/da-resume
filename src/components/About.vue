<template>
  <section class="resume-section" id="about">
    <h1>
      Dan
      <span class="text-primary">Addison</span>
    </h1>
    <p class="subheading">Web Developer</p>
    <p class="lead">
      I'm a web developer from Folkestone with a background in art and music.
      I create bespoke WordPress websites with design agency
      <a
        href="https://nebulodesign.com"
        class="link-text"
      >Nebulo</a>, and have been increasingly exploring static site generators built on React and Vue.
    </p>
    <p
      class="lead"
    >In 2016 I shifted my career path towards web development to better satisfy some of my key drives: for learning, for analytical thinking, for creating compelling things, and for sharing with others.</p>

    <div class="social-icons">
      <a href="https://github.com/DanAddison" target="_blank">
        <font-awesome :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/danaddison/" target="_blank">
        <font-awesome :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://youtube.com/c/DanAddison" target="_blank">
        <font-awesome :icon="['fab', 'youtube']" />
      </a>
      <a href="https://instagram.com/dandevelops" target="_blank">
        <font-awesome :icon="['fab', 'instagram']" />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  max-width: 40rem;
}
h1 {
  margin-bottom: 0;
}
section.resume-section {
  .subheading {
    margin-bottom: 4rem;
  }
}

.social-icons {
  margin-top: 4rem;
  a {
    cursor: pointer;
    display: inline-block;
    color: $primary;
    font-size: 1.75rem;
    margin-right: 1rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  color: $secondary;
}
</style>