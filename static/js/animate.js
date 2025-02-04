



 {
      document.addEventListener("DOMContentLoaded", () => {
      let options = {
        root: null,
        rootMargin: "30px",
        threshold: 0.2
        };
      let observer = new IntersectionObserver(beTouching, options);
      document.querySelectorAll(".pull").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".push").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".spring1").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".spring2").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".spring3").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".reveal").forEach(div => {
        observer.observe(div);
      });
      document.querySelectorAll(".reveal").forEach(a => {
        observer.observe(a);
      });
      document.querySelectorAll(".spring3").forEach(a => {
        observer.observe(a);
      });

    });

    function beTouching(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }//	else {
         // entry.target.classList.remove("active");
        //}
      });
    }
}