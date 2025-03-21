import { Alert, Snackbar } from "@mui/material";

type NotificationTypes = {
    message: string;
    severity: "success" | "error" | "warning" | "info";
    open: boolean;
    onClose: () => void
};

const Notification = ({ message, severity, open, onClose }: NotificationTypes ) => {
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert onClose={onClose} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
