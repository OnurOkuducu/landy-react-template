import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface KeywordDialogProps {
  open: boolean;
  handleClose: () => void;
  keywords: string[];
  handleKeywordChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleAddKeyword: () => void;
  handleKeywordSearch: () => void;
}

const AddKeyword: React.FC<KeywordDialogProps> = ({
  open,
  handleClose,
  keywords,
  handleKeywordChange,
  handleAddKeyword,
  handleKeywordSearch,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: "#F6F5F5" }}>
        Anahtar Kelime Ekle
      </DialogTitle>
      <DialogContent sx={{ height: "400px", backgroundColor: "#F6F5F5" }}>
        <DialogContentText>
          Arama için anahtar kelimeleri girin.
        </DialogContentText>
        {keywords.map((keyword, index) => (
          <TextField
            key={index}
            autoFocus={index === keywords.length - 1}
            margin="dense"
            label={`Anahtar Kelime ${index + 1}`}
            type="text"
            fullWidth
            variant="standard"
            value={keyword}
            onChange={(event) => handleKeywordChange(index, event)}
          />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <IconButton
            onClick={handleAddKeyword}
            sx={{ backgroundColor: "#37B7C3", color: "white" }}
          >
            <AddIcon />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#F6F5F5" }}>
        <Button onClick={handleClose}>İptal</Button>
        <Button onClick={handleKeywordSearch}>Ekle</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddKeyword;