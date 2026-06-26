// slide out sidebar
function SideBar(props) {
  this.props = props

  this.render = function() {
    this.elem = document.getElementById(this.props.id)

    var html =  /* html */`
      <div class="sidebar" id="sidebar">
        <div class="sidebar-items" id="sidebar-items">
          <a href="#about"><div class="sidebar-items-item">About</div></a>
          <hr>
          <a href="#collaborations"><div class="sidebar-items-item">Collaborations</div></a>
          <hr>
          <a href="#performance"><div class="sidebar-items-item">Performances</div></a>
          <hr>
          <a href="#events"><div class="sidebar-items-item">UpcomingEvents</div></a>
          <hr>
          <a href="#testimonies"><div class="sidebar-items-item">Testimonies</div></a>
          <hr>
          <a href="#contact"><div class="sidebar-items-item">Contact & Booking</div></a>
        </div>
      </div>
    `
    this.elem.innerHTML = html

    // get self
    var self = this
    // get items
    this.items = document.getElementById('sidebar-items')
    // get hamburger button and listen to mouse down
    var hamburger = document.getElementById('hamburger')
    hamburger.addEventListener('mousedown', function() {
      event.stopPropagation()
      if(self.isVisible) {
        self.hide()
      } else {
        self.show()
      }
    })
    // hide if click anywhere else
    // document.addEventListener('mousedown', function(e) {
    //   if (e.target.className !== 'sidebar-items-item') {
    //     self.hide()
    //   }
    // })
  }

  // hide sidebar
  this.hide = function() {
    this.isVisible = false
    this.items.style.transform = 'translate(200px, 0px)'
    this.elem.style.zIndex = 1
  }
  // show sidebar
  this.show = function() {
    this.isVisible = true
    this.elem.style.zIndex = 10
    this.items.style.transform = 'translate(0px, 0px)'
  }

  this.render()
  return this
}

var sidebar = new SideBar({id: 'mobile-menu'})