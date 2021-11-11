function Carousal (){
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://muddyshoeprints.files.wordpress.com/2020/05/action-blur-car-child-386009.jpg?w=1200" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://muddyshoeprints.files.wordpress.com/2018/10/lrm_export_2459915841091_20181004_171320157.jpeg?w=1680" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://muddyshoeprints.files.wordpress.com/2020/05/action-blur-car-child-386009.jpg?w=1200" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}
export default Carousal;