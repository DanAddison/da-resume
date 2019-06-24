<template>
  <section class="resume-section" id="portfolio">
      <h2>Portfolio</h2>
      
      <div class="resume-item">

        <div class="portfolio-item">
          <g-image
            alt="John Hosking"
            src="../assets/images/JH2-large.jpg"
            class="img-profile"
            height="300"
            width="500"
            fit="cover"
          />
        </div>

        <div class="portfolio-item">
          <g-image
            alt="Ellis Bolton"
            src="../assets/images/EB2.jpg"
            class="img-profile"
            height="300"
            width="500"
            fit="cover"
          />
        </div>

        <div class="portfolio-item">
          <g-image
            alt="Pen &amp; Plant"
            src="../assets/images/PP1.jpg"
            class="img-profile"
            height="300"
            width="500"
            fit="cover"
          />
        </div>


      </div>
      
  </section>
</template>

<script>

</script>


<style lang="scss" scoped>
section.resume-section {
  max-width: 1400px;
}
.resume-item {
  display: flex;
  flex-wrap: wrap;
}
.portfolio-item {
  max-width: 100%;
  flex: 1 0 400px;
  overflow: hidden;
  margin: 0 2rem 2rem 0;
  box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.75);

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    max-width: 40%;
  }
}

</style>