import logo from "../Images/ايقونات-11.svg";
import logo1 from "../Images/12.svg";
import logo2 from "../Images/ايقونات-09.svg";
import logo3 from "../Images/ايقونات-08.svg";
const Solutions = () => {
  return (
    <div className=" Solutions text-center">
      <h2>مختلف الحلول تناسب جميع اإلحتياجات</h2>
      <div className="container mt-5">
        <div className="row justify-content-center   ">
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                حصة تجريبية مجانية
                <hr></hr>
                يمكنك حجز حصتك األولي مجانا لتقييم المعلم و طريقتنا الخاصة
                بالتدريس قبل اإلشتراك بالمنصة
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo3} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                أقسام خاصة رجال ، نساء ، أطفال
                <hr></hr>
                معلمين و معلمات متخصصون لكل متعلم ، متعلمة و طفل كُل علي حدة
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo2} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                حصص فردية مكثفة
                <hr></hr>
                نعمل بنظام الحصص الفردية لكل متعلم ، و التي تضمن أعلى معدل تركيز
                ، و أعلى جودة تعّلم
              </h6>
            </div>
          </div>
          <div className="card  col-lg-4 col-md-4 m-4  ">
            <img className=" w-25  " src={logo1} alt="Card image cap" />
            <div className="card-body">
              <h6 className="card-text">
                مرونة عالية بتحديد موعد الحصص
                <hr></hr>
                يمكنك تحديد موعد الحصص الخاصة بك مع معلمك الخاص بالمنصة ، بما
                يتناسب مع جدولك اليومي
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
