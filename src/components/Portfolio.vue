<template>
  <section class="resume-section" id="portfolio">
      <h2>Portfolio</h2>
      
      <div class="resume-item">

        <div class="resume-item__content">
          <p class="subheading">Painting</p>
          <p>Selvage wayfarers VHS, jean shorts kitsch brunch af. Forage lyft kale chips tote bag, photo booth cold-pressed next level chartreuse keytar +1.</p>
        </div>

        <div class="resume-item__thumbnail">
          <Lightbox :thumbnail="images[0]" :images="images" />
        </div>
      </div>
  </section>
</template>

<script>
import Lightbox from "./Lightbox";

export default {

  components: {
    Lightbox,
  },
  data() {
    return {
      images: [
        '~/assets/images/KefaloniaThumb2.jpg', '~/assets/images/kef-sea.jpg', '~/assets/images/SintraDan.2.jpg', '~/assets/images/Turq.jpg'
      ]
    };
  }
  
};
</script>


<style lang="scss" scoped>

</style>