'use strict';

require ('d3');

module.exports = function(app) {
  var nodes = [
    {"name": "Code Fellows Grad", "type" : "root", "size" : 20},
      {"name": "Back End"},
        {"name": "Sever Framework"},
        {"name": "Database"},
        {"name": "Architecture"},
        {"name": "Testing"},
      {"name": "Build Tools"},
        {"name": "Grunt", "type" : "lib", "size" : 14},
        {"name": "Browserify", "type" : "lib"},
      {"name": "Soft Skills", "size" : 30},
        {"name": "Organization", "type" : "lib"},
        {"name": "Written Communication", "type" : "lib"},
      {"name": "Scaffolding"},
        {"name": "Yeoman", "type" : "lib"},
      {"name": "Front End"},
        {"name": "MVC Frameworks"},
          {"name": "Backbone", "type" : "lib"},
          {"name": "Ember", "type" : "lib"},
          {"name": "Angular", "type" : "lib"},
          {"name": "React", "type" : "lib"},
        {"name": "Templates"},
          {"name": "Handlebars", "type" : "lib"},
          {"name": "Jade", "type" : "lib"},
        {"name": "Testing"},
          {"name": "Casper", "type" : "lib"},
          {"name": "Phantom", "type" : "lib"},
        {"name": "Package Management"},
          {"name": "Homebrew", "type" : "lib"},
          {"name": "apt", "type" : "lib"},
          {"name": "npm", "type" : "lib"},
          {"name": "Bower", "type" : "lib"},
          {"name": "Node", "type" : "lib"},
          {"name": "Express", "type" : "lib"},
          {"name": "Postres", "type" : "lib"},
          {"name": "MySQL", "type" : "lib"},
          {"name": "Mongo", "type" : "lib"},
          {"name": "Redis", "type" : "lib"},
          {"name": "REST", "type" : "lib"},
          {"name": "SOAP", "type" : "lib"},
          {"name": "Jasmine", "type" : "lib"},
          {"name": "Mocha", "type" : "lib"},
          {"name": "Chai", "type" : "lib"},
  ];

  var links = [
    {"source": 0, "target": 1},
    {"source": 0, "target": 6},
    {"source": 0, "target": 9},
    {"source": 0, "target": 12},
    {"source": 0, "target": 14},

    {"source": 1, "target": 2},
    {"source": 1, "target": 3},
    {"source": 1, "target": 4},
    {"source": 1, "target": 5},

    {"source": 2, "target": 31},
    {"source": 2, "target": 32},

    {"source": 3, "target": 33},
    {"source": 3, "target": 34},
    {"source": 3, "target": 35},
    {"source": 3, "target": 36},

    {"source": 4, "target": 37},
    {"source": 4, "target": 38},

    {"source": 5, "target": 39},
    {"source": 5, "target": 40},
    {"source": 5, "target": 41},

    {"source": 6, "target": 7},
    {"source": 6, "target": 8},

    {"source": 9, "target": 10},
    {"source": 9, "target": 11},

    {"source": 12, "target": 13},

    {"source": 14, "target": 15},
    {"source": 14, "target": 20},
    {"source": 14, "target": 23},
    {"source": 14, "target": 26},

    {"source": 15, "target": 16},
    {"source": 15, "target": 17},
    {"source": 15, "target": 18},
    {"source": 15, "target": 19},

    {"source": 20, "target": 21},
    {"source": 20, "target": 22},

    {"source": 23, "target": 24},
    {"source": 23, "target": 25},

    {"source": 26, "target": 27},
    {"source": 26, "target": 28},
    {"source": 26, "target": 29},
    {"source": 26, "target": 30}
  ];

  var width = 960,
      height = 500;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(60)
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
          .style('fill', 'steelblue');
        }
      })
      .call(force.drag);

  node.append("circle")
      .attr("r", function(d){
        if( !d.type ) return 4;
        return d.size || 8;
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
