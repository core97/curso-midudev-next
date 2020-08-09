import { colors } from "../../styles/theme"

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: #fff;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 16px;
          padding: 8px 24px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        button:hover {
          opacity: 0.7;
        }

        button > :global(svg) {
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}
