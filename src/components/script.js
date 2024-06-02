export default {
  name: "App",
  data() {
    return {
      currentIndex: 0,
      images: 12,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.images * 232) {
        this.currentIndex = this.currentIndex + 232;
        console.log(this.currentIndex);
        // console.log(this.images);
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex = this.currentIndex - 232;
        console.log(this.currentIndex);
      }
      //else {
      //   this.currentIndex = (this.images - 1) * 232;
      // }
    },
  },
};
