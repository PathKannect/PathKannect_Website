import React from 'react';

const Maintenance = () => {
    return (
        <div style={styles.container}>
            {/* Background Decorative Blobs */}
            <div style={styles.blob1}></div>
            <div style={styles.blob2}></div>

            <div style={styles.card}>
                {/* Animated Status Badge */}
                <div style={styles.badgeContainer}>
                    <span style={styles.statusPulse}></span>
                    <span style={styles.statusText}>System Maintenance</span>
                </div>

                <h1 style={styles.heading}>We’ll be back <br /><span style={styles.gradientText}>momentarily.</span></h1>

                <p style={styles.subtext}>
                    This website is currently unavailable due to administrative reasons.
                    Please contact the administrator for more information.

                </p>

                <div style={styles.footer}>
                    <p style={styles.copyright}>
                        &copy; {new Date().getFullYear()} PathKannect
                    </p>
                </div>
            </div>

            {/* Inline Styles for Animation */}
            <style>
                {`
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
            </style>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030712", // Very dark modern grey/black
        padding: "24px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        overflow: "hidden",
    },
    // Background decorative elements
    blob1: {
        position: "absolute",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)",
        top: "-10%",
        left: "-10%",
        zIndex: 0,
        animation: "float 10s ease-in-out infinite",
    },
    blob2: {
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(0,0,0,0) 70%)",
        bottom: "-5%",
        right: "-5%",
        zIndex: 0,
        animation: "float 8s ease-in-out infinite reverse",
    },
    card: {
        position: "relative",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "60px 40px",
        borderRadius: "32px",
        maxWidth: "540px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    badgeContainer: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        padding: "6px 16px",
        borderRadius: "100px",
        marginBottom: "32px",
        border: "1px solid rgba(34, 197, 94, 0.2)",
    },
    statusPulse: {
        width: "8px",
        height: "8px",
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        animation: "pulse 2s infinite",
    },
    statusText: {
        fontSize: "12px",
        fontWeight: "600",
        color: "#22c55e",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
    },
    heading: {
        fontSize: "clamp(32px, 6vw, 48px)",
        fontWeight: "800",
        color: "#ffffff",
        letterSpacing: "-0.03em",
        lineHeight: "1.1",
        marginBottom: "20px",
     },
    gradientText: {
        background: "linear-gradient(90deg, #6366f1, #a855f7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    subtext: {
        fontSize: "18px",
        color: "#9ca3af",
        lineHeight: "1.6",
        marginBottom: "40px",
        maxWidth: "400px",
        marginRight: "auto",
        marginLeft: "auto",
    },
    buttonGroup: {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        marginBottom: "40px",
    },
    primaryButton: {
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "12px 24px",
        borderRadius: "12px",
        fontSize: "15px",
        fontWeight: "600",
        textDecoration: "none",
        transition: "all 0.2s ease",
    },
    secondaryButton: {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "12px 24px",
        borderRadius: "12px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
    },
    footer: {
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "32px",
    },
    copyright: {
        fontSize: "13px",
        color: "#6b7280",
    }
};

export default Maintenance;