import { useEffect, useState } from "react";

const content = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
        return;
      }

      setShowGoToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Không được viết như này vì nó sẽ chạy trước khi reder dữ liệu, nếu tác vụ nặng nó phải tốn thời gian tính toán trước khi render => làm cho web hiển thị UI chậm.
  // Thay vào đó t render UI ra trước rối mới bắt đầu tính toán
  //   document.title = title;

  return (
    <div>
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
};

export default content;
