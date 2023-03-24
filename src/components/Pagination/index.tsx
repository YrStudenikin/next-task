import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import styles from "./Pagination.module.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [inputPage, setInputPage] = useState(1);

  useEffect(() => setInputPage(currentPage), [currentPage]);

  const handleInputPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPage = parseInt(event.target.value);
    setInputPage(newPage);
  };

  const handlePageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    }
  };

  return (
    <div className={styles["pagination"]}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </Button>
      <form onSubmit={handlePageSubmit}>
        <div className={styles["input-container"]}>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputPage}
            className={styles["input-field"]}
            onChange={handleInputPageChange}
          />
          <span className={styles["postfix"]}>
            <span>/&nbsp;{totalPages}</span>
          </span>
          <button className={styles["submit-btn"]}>GO</button>
        </div>
      </form>
      <Button
        color="success"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </Button>
    </div>
  );
};

export default Pagination;
