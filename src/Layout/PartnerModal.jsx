import { faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getLinkImage, SERVER } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PartnerModal = ({ isOpen, onClose, data, fetchData }) => {
  if (!isOpen) return null;
  const onInsertFile = (position) => {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "image/*";
    inputFile.onchange = async () => {
      const file = inputFile.files[0];
      if (!file || position === "") {
        alert("Vui lòng chọn ảnh và nhập vị trí");
        return;
      }

      const formData = new FormData();
      formData.append("imagePath", file);
      formData.append("position", position);

      try {
        const res = await SERVER.API?.post("/api/partner", formData);
        console.log(res);
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };

    inputFile.click(); // Gọi hộp thoại chọn file
  };

  const onDeleteFile = async (index) => {
    try {
      const res = await SERVER.API?.delete("/api/partner/" + index);
      console.log(res);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50 select-none">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <button
          className="cursor-pointer flex items-center text-white py-1 px-2 gap-1 rounded-sm bg-[#BA0000] mb-4"
          title="Add partner"
          onClick={() => onInsertFile(0)}
        >
          <FontAwesomeIcon icon={faPlusCircle} className="text-white" /> Add partner to head
        </button>
        <div className="flex flex-row flex-wrap gap-3">
          {data.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden max-w-60 max-h-20 border border-gray-300 p-2 relative">
              <img src={getLinkImage(src)} alt={`Image ${index}`} className=" w-full h-full object-contain" />
              <div className="absolute top-0 right-0 z-1 cursor-pointer flex flex-col gap-2 h-full justify-center">
                <button className="cursor-pointer w-7 h-7 rounded-sm bg-red-500 " title="Delete partner" onClick={() => onDeleteFile(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} className="text-white" />
                </button>
                <button className="cursor-pointer w-7 h-7 rounded-sm bg-[#BA0000]" title="Add partner" onClick={() => onInsertFile(index)}>
                  <FontAwesomeIcon icon={faPlusCircle} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
