import { useWindowSize } from '../hooks';

export function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  const getDeviceType = () => {
    if (width < 768) return '📱 Mobile View';
    return '🖥️ Desktop View';
  };

  return (
    <div className="window-size-display">
      <h3>📏 Window Size Info</h3>
      <div className="size-info">
        <p><strong>Dimensions:</strong> {width} x {height}px</p>
        <p><strong>Device Type:</strong> {getDeviceType()}</p>
        <div className="size-bars">
          <div className="size-bar">
            <span>Width: {width}px</span>
            <div className="bar" style={{ width: `${Math.min(width / 10, 100)}%` }}></div>
          </div>
          <div className="size-bar">
            <span>Height: {height}px</span>
            <div className="bar" style={{ width: `${Math.min(height / 10, 100)}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
