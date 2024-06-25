"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const SinglePsalm = () => {
  const params = useParams();
  const { id } = params;

   const idStr = Array.isArray(id) ? id[0] : id;

   const prev = idStr ? parseFloat(idStr) - 1 : 0;
   const next = idStr ? parseFloat(idStr) + 1 : 0;

  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    if (idStr) {
      setDisablePrev(prev < 1);
      setDisableNext(next > 150);
    }
  }, [idStr, prev, next]);

  return (
    <div className="container max-w-7xl py-10">
      <h1>Psalm {id}</h1>

      <div className="flex justify-between items-center pt-10">
        <div>
          {!disablePrev && (
            <Link
              className="text-black px-5 py-1 bg-white/[0.5] border-white/[0.5] rounded-lg shadow hover:bg-[#9F176A] hover:text-white"
              href={`/psalms/${prev}`}
            >
              Psalm {prev}
            </Link>
          )}
        </div>
        <div>
          {!disableNext && (
            <Link
              className="text-black px-5 py-1 bg-white/[0.5] border-white/[0.5] rounded-lg shadow hover:bg-[#9F176A] hover:text-white"
              href={`/psalms/${next}`}
            >
              Psalm {next}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePsalm;
