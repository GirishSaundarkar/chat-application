export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
        hours: "2-digit",
        minute: "2-digit",
        hours12: false
    })
}