      // create sidebar and attach to menu open

      var colors = ["#ff0000", "#00ff00", "#00ff00"];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      $('.blog-item').css("color", random_color);

      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

      $('#gp-blog-menu').on('click',function(){

        $("#gp-blog-sidebar").sidebar('toggle');
      });
       


        $('.blog-read-button').on('click',function(){
          $('.fadeup').transition('fade out');
          $('#gp-blog-par').transition('fade up');
        });

        $('.blog-close-button').on('click',function(){
          $('#gp-blog-par').transition('fade down');
          $('.fadeup').transition('fade in');

        });

