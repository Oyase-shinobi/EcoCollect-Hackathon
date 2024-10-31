import Swal from "sweetalert2"

export const SweetAlert = ({icon, title, text}) => {
  return (
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
  )
}
