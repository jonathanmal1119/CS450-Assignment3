import React, { Component } from "react";
import * as d3 from "d3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { technology: "Excel", count: 1078 },
        { technology: "Tableau", count: 852 },
        { technology: "PowerPoint", count: 681 },
        { technology: "R", count: 561 },
        { technology: "Python", count: 530 }
      ]
    };
  }

  componentDidMount() {
    // Create a div element and append it to the body. This div will be positioned absolutely and initially hidden
    const tooltip = d3.select("body").selectAll(".tooltip").data([0]).join("div").attr("class", "tooltip").style("position", "absolute") // for precise positioning
      .style("background", "black").style("color", "white").style("padding", "18px").style("border-radius", "4px").style("font-size", "12px").style("display", "none");


      d3.selectAll("rect").data(this.state.data).join("rect").attr("x",0).attr("y",(d,i)=>i*51).attr("width",d=>d.count).attr("height",50).attr("fill","orange")
      .on("mouseover",(event, d)=>{
        tooltip.style("display","block").style("left", event.pageX + "px").style("top",event.pageY + "px").html(`<p> Technology: ${d.technology} </p> <p> Count: ${d.count} </p>`)

      })
      .on("mouseout", ()=>{
        tooltip.style("display","none")
      })
    }

  render() {
    return (
      <div className="responsive-svg-container">
        <svg viewBox="0 0 1200 1600">
          <rect></rect>
          <rect></rect>
          <rect></rect>
          <rect></rect>
          <rect></rect>
        </svg>
      </div>
    );
  }
}

export default App;