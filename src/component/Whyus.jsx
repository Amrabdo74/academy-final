import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import imgTost from "../Images/ايقونات-04.svg";
import imgTost1 from "../Images/ايقونات-03.svg";
import imgTost2 from "../Images/ايقونات-07.svg";
import imgTost3 from "../Images/ايقونات-05.svg";
import imgTost4 from "../Images/ايقونات-06.svg";
const Whyus = () => {
  return (
    <div className="Whyus" id="why">
      <MDBContainer className="container ">
        <h2 className="mb-5">لماذا تختار منصة الأمين </h2>
        <MDBCarousel showControls dark>
          <MDBCarouselItem className="active ">
            <MDBRow >
              <MDBCol lg="9" className="Whyus-sections d-flex flex-column-reverse   text-center ">
                <div>
                  <h5 className="mb-3">معلمين ومعلمات معتمدين: </h5>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    استفيدوا من خبرة معلمينا ومعلماتنا المعتمدين الذين يقدمون
                    دروًسا مخصصة لتعلم اللغة العربية وحفظ القرآن الكريم. يمكنكم
                    الوصول إليهم في أي وقت يناسبكم
                  </p>
                </div>
                <img src={imgTost1} className="ro" alt="" style={{ width: "120px" }} />
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem >
            <MDBRow >
              <MDBCol lg="9" className="Whyus-sections d-flex flex-column-reverse text-center ">
                <div >
                  <h5 className="mb-3">
                    تطبيقات تعلم اللغة العربية والقرآن الكريم :
                  </h5>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    قمنا بتطوير طريقتنا الخاصة التي توفر لكم فرصة لتعلم اللغة
                    وحفظ القرآن بشكل تفاعلي وممتع عبر هواتفكم الذكية.
                  </p>
                </div>
                <img src={imgTost} alt="" style={{ width: "120px" }} />
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem >
            <MDBRow >
              <MDBCol lg="9" className="Whyus-sections d-flex flex-column-reverse  text-center  ">
                <div>
                  <h5 className="mb-3">موارد تعليمية شاملة: </h5>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    اطلعوا على مجموعة واسعة من الموارد التعليمية المتاحة على
                    المنصة تشمل دروسا في القرآن واللغة العربية، وتمكنكم من
                    متابعة تقدمكم.{" "}
                  </p>
                </div>
                <img className="rounded " src={imgTost3} alt="" style={{ width: "120px" }} />
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem >
            <MDBRow >
              <MDBCol lg="9" className="Whyus-sections d-flex  flex-column-reverse text-center ">
                <div>
                  <h5 className="mb-3">مجتمع داعم : </h5>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    انضموا إلى مجتمعنا الافتراضي حيث يمكنكم التواصل مع زملائكم
                    والحصول على الدعم والمشاركة في فعاليات تعزز تفاعلكم مع اللغة
                    والقرآن.{" "}
                  </p>
                </div>
                <img src={imgTost2} className="rounded " alt="" style={{ width: "120px" }} />
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem >
            <MDBRow >
              <MDBCol lg="9" className="Whyus-sections d-flex  flex-column-reverse text-center ">
                <div>
                  <h5 className="mb-3">جدول زمني مرن: </h5>
                  <p className="text-muted">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    نحن ندرك أهمية توفير وقت مرن لدراستكم. لذلك، يمكنكم تنظيم
                    جدولكم الزمني بناءً على الالتزامات اليومية.{" "}
                  </p>
                </div>
                <img className="rounded " src={imgTost4} alt="" style={{ width: "120px" }} />
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

        </MDBCarousel>

      </MDBContainer>
    </div>
  );
};

export default Whyus;
