export default {
  name: "App",
  data() {
    return {
      //Taking currentIndex a variable which will help in shifting images right and left on button clicks
      currentIndex: 0,
      //Total images used in here is 12 currently, if more images used, increment the count here.
      images: 12,
    };
  },
  methods: {
    //Here is the nextSlide and prevSlide functions which is helping in shifting the images to left and unveiling the next right image.
    //What I have done here is that, since I used gap between each images as 3.2rem or 32px( as 1rem = 10px is set by me in CSS )
    // And each image has given a width of 20rem or 200px so overall I wanted a shift of 232px on right or left clicks.
    //So On each click, currentIndex changes by 232px depending on our click. And Once it reaches total image count* 232 px, it starts again from 0.
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
