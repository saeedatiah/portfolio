import { TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-4 sm:px-6 lg:px-16">
      <Box className="w-full max-w-md sm:max-w-lg bg-gray-700 p-6 rounded-md">
        <h2 className="text-3xl text-center mb-4">اتصل بي</h2>
        <form>
          <TextField
            fullWidth
            label="اسمك"
            variant="outlined"
            className="mb-4"
          />
          <TextField
            fullWidth
            label="البريد الإلكتروني"
            variant="outlined"
            className="mb-4"
          />
          <TextField
            fullWidth
            label="رسالتك"
            variant="outlined"
            multiline
            rows={4}
            className="mb-4"
          />
          <Button variant="contained" color="primary" fullWidth>
            إرسال
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;