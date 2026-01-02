// import React from "react";
// import { Affix, Button, Stack } from "@mantine/core";
// import { useCharacterAnimations } from "../contexts/CharacterAnimation";

// const Interface = () => {
//   const { animations, animationIndex, setAnimationIndex } =
//     useCharacterAnimations();
//   return (
//     <Affix position={{ bottom: 50, right: 20 }}>
//       <Stack>
//         {animations.map((animation, index) => (
//           <Button
//             key={animation}
//             variant={index === animationIndex ? "filled" : "light"}
//             onClick={() => setAnimationIndex(index)}
//           >
//             {animation}
//           </Button>
//         ))}
//       </Stack>
//     </Affix>
//   );
// };

// export default Interface;


import React from "react";
import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimation";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  return (
    <Affix position={{ bottom: 40, right: 40 }}>
      <Stack
        spacing="sm"
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "12px 16px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {animations.map((animation, index) => (
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "light"}
            color="blue"
            radius="xl"
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;
