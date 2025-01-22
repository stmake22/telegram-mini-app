// import { useEffect, useState } from "react";

// const useSafeAreaInsets = () => {
//   const [insets, setInsets] = useState({ top: 0, bottom: 0 });

//   useEffect(() => {
//     const updateInsets = () => {
//       const style = getComputedStyle(document.documentElement);
//       setInsets({
//         top: parseInt(style.getPropertyValue("--safe-area-inset-top"), 10) || 0,
//         bottom: parseInt(style.getPropertyValue("--safe-area-inset-bottom"), 10) || 0,
//       });
//     };

//     updateInsets();
//     window.addEventListener("resize", updateInsets);

//     return () => window.removeEventListener("resize", updateInsets);
//   }, []);

//   return insets;
// }

// export default useSafeAreaInsets;