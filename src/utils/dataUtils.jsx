export const exportData = () => {
    const fixtureResults = localStorage.getItem("fixtureResults") || "{}";
    const data = {
      fixtureResults: JSON.parse(fixtureResults),
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };
  
  export const importData = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.fixtureResults) {
        localStorage.setItem("fixtureResults", JSON.stringify(data.fixtureResults));
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to parse imported data", e);
      return false;
    }
  };
  
  export const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "dream11-ipl-data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };