import SwipingCard from "./SwipingCard";

function TestSwipe() {
  return (
<div className="Iphone14ProMax1" style={{width: 430, height: 932, position: 'relative', background: 'white'}}>
  <div className="Rectangle1" style={{width: 430, height: 932, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', border: '1px black solid'}} />
  <div className="Rectangle2" style={{width: 410, height: 807, left: 10, top: 10, position: 'absolute', mixBlendMode: 'darken', background: '#D9D9D9', border: '1px black solid'}}></div>
  <div className="Rectangle3" style={{width: 82, height: 57, left: 174, top: 843, position: 'absolute', background: '#D9D9D9', border: '1px black solid'}} />
  <div className="Rectangle5" style={{width: 82, height: 57, left: 42, top: 843, position: 'absolute', background: '#D9D9D9', border: '1px black solid'}} />
  <div className="Rectangle4" style={{width: 82, height: 57, left: 306, top: 843, position: 'absolute', background: '#D9D9D9', border: '1px black solid'}} />
  <div className="Rectangle6" style={{width: 410, height: 721, left: 10, top: 10, position: 'absolute', background: '#D9D9D9', border: '1px black solid'}} >
    
    <SwipingCard>

    </SwipingCard>

  </div>
  {/* <div className="Ellipse1" style={{width: 50, height: 53, left: 124, top: 745, position: 'absolute', background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} /> */}
  {/* <div className="Ellipse2" style={{width: 50, height: 53, left: 256, top: 745, position: 'absolute', background: '#D9D9D9', borderRadius: 9999, border: '1px black solid'}} /> */}
</div>
)
  
};

export default TestSwipe;
