import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

export class MainView extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return ``
  }

  constructor() {
    super();
    $(document).ready(function () {
      $("*[dir='ltr'] .owl-carousel.content-slider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplaySpeed: 700,
        loop: true,
        nav: false,
        navText: false,
        dots: false
      })
    })
  }

}

customElements.define('main-view', MainView);
