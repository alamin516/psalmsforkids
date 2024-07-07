import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";



const PostSize = ({ setPageSize, pageSize }: { setPageSize: (newPageSize: string) => void, pageSize: string }) =>{

  const handlePageSizeChange = (newPageSize: string) => {
    setPageSize(newPageSize);
  };

  return (
    <div>
      
    </div>
  );
};

export default PostSize;
