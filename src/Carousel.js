import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import Couch13 from './Couch13.jpg'
import Couch14 from './Couch14.jpg'
import Couch15 from './Couch15.jpg'
import Couch16 from './Couch16.jpg'
import Couch17 from './Couch17.jpg'
import Couch18 from './Couch18.jpg'

const items = [
  {
    src: Couch13, 
    altText: '',
    caption: ''
  },
  {
    src: Couch14,
    altText: '',
    caption: ''
  },
  {
    src: Couch15,
    altText: '',
    caption: ''
  },
  {
    src: Couch16,
    altText: '',
    caption: ''
  },
  {
    src: Couch17,
    altText: '',
    caption: ''
  },
  {
    src: Couch18,
    altText: '',
    caption: ''
  }
];
{/*}
class CouchCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = true;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}*/}
const CouchCarousel = () => <UncontrolledCarousel items={items} />;

export default CouchCarousel;