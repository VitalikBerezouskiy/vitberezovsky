var space;function floatySpace(){var e=["#FF3F8E","#04C2C9","#2E55C1"];space=new CanvasSpace("canvas","#252934").display();var a=new Form(space),n=[],t=space.size.$divide(1.8),o=-.5*window.innerWidth,i=.05*window.innerWidth;i>150&&(i=150);for(var s=new Line(0,o).to(space.size.x,0),r=t.clone(),c=1*Math.min(space.size.x,space.size.y),h=0;h<i;h++){var p=new Vector(Math.random()*c-Math.random()*c,Math.random()*c-Math.random()*c);p.moveBy(t).rotate2D(h*Math.PI/i,t),p.brightness=.1,n.push(p)}space.add({animate:function(o,i,h){for(var p=0;p<n.length;p++){var d=n[p];d.rotate2D(Const.one_degree/20,t),a.stroke(!1).fill(e[p%3]).point(d,1);var v=new Line(d).to(s.getPerpendicularFromPoint(d));Math.min(.8,1-Math.abs(s.getDistanceFromPoint(d))/c);Math.abs(v.getDistanceFromPoint(r))<50?n[p].brightness<.3&&(n[p].brightness+=.015):n[p].brightness>.1&&(n[p].brightness-=.01);var l="rgba(255,255,255,"+n[p].brightness+")";a.stroke(l).fill(!0).line(v)}},onMouseAction:function(e,a,n,t){"move"==e&&r.set(a,n)},onTouchAction:function(e,a,n,t){this.onMouseAction(e,a,n)}}),space.bindMouse(),space.play()}floatySpace(),$(window).resize((function(){space.removeAll(),$("canvas").remove(),floatySpace()}));