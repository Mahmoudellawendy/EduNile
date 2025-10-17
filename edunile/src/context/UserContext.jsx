import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // تحديث البيانات في localStorage لما المستخدم يتغير
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // تحديث تلقائي لو حصل login/logout في تبويب آخر
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("currentUser");
      setCurrentUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // تسجيل الدخول
  const login = (user) => {
    setCurrentUser(user);
    window.location.reload(); // ← تحديث تلقائي بعد تسجيل الدخول
  };

  // تسجيل الخروج
  const logout = () => {
    setCurrentUser(null);
    window.location.reload(); // ← تحديث تلقائي بعد تسجيل الخروج
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
