//creates a selection
//selection is body
var container = d3.select("body")

//carrots not needed only need tag name in ds
//semicolen ends string (if i want to append more i would remove the semicolen)
    //selection changed to svg
    .append("svg")
    //datum is a single value
    .datum(500)
    //adds to the svg (would add to the body if i put it under body)
    //.attr("width", "500px")
    //does same thing as above but this way we can assign something dynamic (gives you more freedom/options)
    .attr("width", function(d){
      return d+"px";
    })
    .attr("height", "500px")
    .attr("class", "container")
    //selection changed to text element
    //.append("text");

//start a new block when adding things
//above Example 2.8 line 20
//y=mx+b
//creates a linear scale and stores it in var x
var x = d3.scaleLinear() //create the scale
    .domain([0, 40]) //input min and max
    .range([0, 500]); //output min and max
  //x is a function
console.log(x);

//this calls json
d3.json("data/MegaCities.geojson", function(data){
  //new block created for adding new text

  // selects all using d3.selectAll
  //here uses .textElement as a class
  //.selectAll sets up a loop so in this case it does everyting i've listed below
  var textElements = container.selectAll(".textElement")
      //takes an array of values
      //can have any elements inside array
      .data(data.features)
      //applys data to selection
      .enter()
      .append("text")
      .attr("class", "textElent")
      .attr("x", 0)
      .attr("y", function(d, i){
        return x(d.properties.Pop_2015);
      })
      .text(function(d){
        //d is each value from the array
        console.log(d);
        //passing this as domain to return the domain
        return d.properties.Pop_2015;

      })
  console.log(textElements);

})
//new block created for adding new text

// selects all using d3.selectAll
//here uses .textElement as a class
//.selectAll sets up a loop so in this case it does everyting i've listed below
// var textElements = container.selectAll(".textElement");
//     //takes an array of values
//     //can have any elements inside array
//     .data([20, 40, 60, 80])
//     //applys data to selection
//     .enter()
//     .append("text")
//     .attr("class", "textElent")
//     .attr("x", 0)
//     .attr("y", function(d){
//       return d;
//     })
//     .text(function(d){
//       //d is each value from the array
//       console.log(d);
//       return d;
//     })
// console.log(textElements);
