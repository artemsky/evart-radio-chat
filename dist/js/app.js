jQuery(function(n){"use strict";n(document).ready(function(){n("#main-slider .owl-carousel").owlCarousel({nav:!0,slideSpeed:300,paginationSpeed:400,items:1,singleItem:!0,dots:!0,autoplay:!0,autoplayTimeout:5e3,loop:!0,animateOut:"owl-fadeUp-out",animateIn:"owl-fade-in",navText:["<span class='glyphicon glyphicon-menu-left'></span>","<span class='glyphicon glyphicon-menu-right'></span>"]})}),n(document).ready(function(){var e=n("#player"),o=e.find('input[type="range"]').rangeslider({polyfill:!1,onInit:function(){},onSlide:function(n,e){},onSlideEnd:function(n,e){}});e.find(".volume-down").click(function(){console.log(123),o.val(0).change()}),e.find(".volume-up").click(function(){o.val(100).change()})}),n(document).ready(function(){n("#program").perfectScrollbar({suppressScrollX:!0,wheelSpeed:.5,wheelPropagation:!0})}),n(document).ready(function(){n("#blockquote .owl-carousel").owlCarousel({nav:!0,slideSpeed:300,paginationSpeed:400,items:1,singleItem:!0,dots:!1,autoplay:!0,autoplayTimeout:5e3,loop:!0,animateOut:"owl-fadeUp-out",animateIn:"owl-fade-in",navText:["<span class='glyphicon glyphicon-menu-left'></span>","<span class='glyphicon glyphicon-menu-right'></span>"]})})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwibmF2Iiwic2xpZGVTcGVlZCIsInBhZ2luYXRpb25TcGVlZCIsIml0ZW1zIiwic2luZ2xlSXRlbSIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5VGltZW91dCIsImxvb3AiLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwibmF2VGV4dCIsInBsYXllciIsInJhbmdlc2xpZGVyIiwiZmluZCIsInBvbHlmaWxsIiwib25Jbml0Iiwib25TbGlkZSIsInBvc2l0aW9uIiwidmFsdWUiLCJvblNsaWRlRW5kIiwiY2xpY2siLCJjb25zb2xlIiwibG9nIiwidmFsIiwiY2hhbmdlIiwicGVyZmVjdFNjcm9sbGJhciIsInN1cHByZXNzU2Nyb2xsWCIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxTQUFTQyxHQUNaLFlBR0FBLEdBQUVDLFVBQVVDLE1BQU0sV0FDZEYsRUFBRSw4QkFBOEJHLGFBRTVCQyxLQUFNLEVBQ05DLFdBQWEsSUFDYkMsZ0JBQWtCLElBQ2xCQyxNQUFPLEVBQ1BDLFlBQVksRUFDWkMsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLGdCQUFpQixJQUNqQkMsTUFBTSxFQUNOQyxXQUFZLGlCQUNaQyxVQUFXLGNBQ1hDLFNBQ0ksc0RBQ0EsNERBTVpmLEVBQUVDLFVBQVVDLE1BQU0sV0FDZCxHQUFJYyxHQUFTaEIsRUFBRSxXQUNYaUIsRUFBY0QsRUFBT0UsS0FBSyx1QkFBdUJELGFBQ2pERSxVQUFVLEVBR1ZDLE9BQVEsYUFHUkMsUUFBUyxTQUFTQyxFQUFVQyxLQUc1QkMsV0FBWSxTQUFTRixFQUFVQyxNQUVuQ1AsR0FBT0UsS0FBSyxnQkFBZ0JPLE1BQU0sV0FDOUJDLFFBQVFDLElBQUksS0FDWlYsRUFBWVcsSUFBSSxHQUFHQyxXQUV2QmIsRUFBT0UsS0FBSyxjQUFjTyxNQUFNLFdBQzVCUixFQUFZVyxJQUFJLEtBQUtDLGFBTTdCN0IsRUFBRUMsVUFBVUMsTUFBTSxXQUNkRixFQUFFLFlBQVk4QixrQkFDVkMsaUJBQWlCLEVBQ2pCQyxXQUFZLEdBQ1pDLGtCQUFrQixNQU0xQmpDLEVBQUVDLFVBQVVDLE1BQU0sV0FDZEYsRUFBRSw2QkFBNkJHLGFBRTNCQyxLQUFNLEVBQ05DLFdBQWEsSUFDYkMsZ0JBQWtCLElBQ2xCQyxNQUFPLEVBQ1BDLFlBQVksRUFDWkMsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLGdCQUFpQixJQUNqQkMsTUFBTSxFQUNOQyxXQUFZLGlCQUNaQyxVQUFXLGNBQ1hDLFNBQ0ksc0RBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgLy9NYWluIHNsaWRlclxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiNtYWluLXNsaWRlciAub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuXHJcbiAgICAgICAgICAgIG5hdiA6IHRydWUsIC8vIFNob3cgbmV4dCBhbmQgcHJldiBidXR0b25zXHJcbiAgICAgICAgICAgIHNsaWRlU3BlZWQgOiAzMDAsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25TcGVlZCA6IDQwMCxcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIHNpbmdsZUl0ZW06IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdvd2wtZmFkZVVwLW91dCcsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ293bC1mYWRlLWluJyxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1xyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWxlZnQnPjwvc3Bhbj5cIixcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbWVudS1yaWdodCc+PC9zcGFuPlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vUmFuZ2VzbGlkZXIuanNcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSAkKFwiI3BsYXllclwiKTtcclxuICAgICAgICB2YXIgcmFuZ2VzbGlkZXIgPSBwbGF5ZXIuZmluZCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJykucmFuZ2VzbGlkZXIoe1xyXG4gICAgICAgICAgICBwb2x5ZmlsbDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uKCkge30sXHJcblxyXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgICAgICBvblNsaWRlOiBmdW5jdGlvbihwb3NpdGlvbiwgdmFsdWUpIHt9LFxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICAgICAgb25TbGlkZUVuZDogZnVuY3Rpb24ocG9zaXRpb24sIHZhbHVlKSB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBsYXllci5maW5kKFwiLnZvbHVtZS1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDEyMyk7XHJcbiAgICAgICAgICAgIHJhbmdlc2xpZGVyLnZhbCgwKS5jaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwbGF5ZXIuZmluZChcIi52b2x1bWUtdXBcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmFuZ2VzbGlkZXIudmFsKDEwMCkuY2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9TY3JvbGxiYXJcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNwcm9ncmFtJykucGVyZmVjdFNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgd2hlZWxTcGVlZDogMC41LFxyXG4gICAgICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9CbG9ja3F1b3RlXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI2Jsb2NrcXVvdGUgLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcblxyXG4gICAgICAgICAgICBuYXYgOiB0cnVlLCAvLyBTaG93IG5leHQgYW5kIHByZXYgYnV0dG9uc1xyXG4gICAgICAgICAgICBzbGlkZVNwZWVkIDogMzAwLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uU3BlZWQgOiA0MDAsXHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBzaW5nbGVJdGVtOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ293bC1mYWRlVXAtb3V0JyxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnb3dsLWZhZGUtaW4nLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtbGVmdCc+PC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXJpZ2h0Jz48L3NwYW4+XCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxufSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
