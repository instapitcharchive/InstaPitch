'use strict';

require ('d3');

module.exports = function(app) {
  var nodes = [
    {"name": "Code Fellows Grad", "type" : "root", "size" : 20},
      {"name": "Back End"}, //1
        {"name": "Database"}, //2
        {"name": "Architecture"}, //3
      {"name": "Soft Skills", "size" : 30}, //4
        {"name": "Organization", "type" : "lib"},
        {"name": "Written Communication", "type" : "lib"},
        {"name": "Presentation", "type" : "lib"},
        {"name": "Team Leadership", "type" : "lib"},
      {"name": "Front End"}, //9
        {"name": "MVC Frameworks"}, //10
          {"name": "Backbone", "type" : "lib"}, //11
          {"name": "Ember", "type" : "lib"}, //12
          {"name": "Angular", "type" : "lib"}, //13
          {"name": "React", "type" : "lib"}, //14
      {"name": "Automated Testing"} //15
  ];

  var links = [
    {"source": 0, "target": 1},
    {"source": 0, "target": 4},
    {"source": 0, "target": 9},
    {"source": 0, "target": 15},

    {"source": 1, "target": 2},
    {"source": 1, "target": 3},

    {"source": 4, "target": 5},
    {"source": 4, "target": 6},
    {"source": 4, "target": 7},
    {"source": 4, "target": 8},

    {"source": 9, "target": 10},

    {"source": 10, "target": 11},
    {"source": 10, "target": 12},
    {"source": 10, "target": 13},
    {"source": 10, "target": 14},
  ];

  var width = 960,
      height = 500;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(40)
      .charge(-300)
      .on("tick", tick)
      .start();

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

  var link = svg.selectAll(".link")
      .data(force.links())
    .enter().append("line")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(force.nodes())
    .enter().append("g")
      .attr("class", function(d){
        return "node " + (d.type || "");
      })
      .on("click", function(d){
        console.log(d);
        if( d.type ){
          d3.select(this).select("circle")
          .attr("class", "selected")
          .transition().duration(500)
          .style('fill', 'red');
        }
      })
      .call(force.drag);

  node.append("circle")
      .attr("r", function(d){
        if( !d.type ) return 14;
        return d.size || 16;
      });

  node.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  function tick(e) {
    var k = 6 * e.alpha;
    link
        .attr("x1", function(d) {
          // return d.source.x -=k;
          if (d.index < 14) return d.source.x -=k;
          else return d.source.x;
        })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) {
          // return d.target.x -=k;
          if (d.index < 14) return d.target.x -=k;
          else return d.target.x;
        })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }

  function mouseover() {
    d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 16);
  }

  function mouseout() {
    d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 8);
  }
}
