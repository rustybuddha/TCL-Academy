<script>
    import DescBox from "./desc-box.svelte" ; 
    import ScrumBox from "./scrum-box.svelte" ;
</script>

<div>
    <DescBox
      tag="ENGAGEMENT"
      title="Collaborative Brilliance: Agile Scrum Success by a Powerhouse Team"
      desc="A rocking team of 1 UX Designer, 6 Software Engineers and 5 QA
      Engineers successfully executed this project with a agile scrum based
      approach."
    />

    <div class="flex max-[1000px]:flex-col justify-center mt-10">
      <div class="flex justify-center my-3">
        <ScrumBox
          title="Discovery"
          list={[
            "User Research",
            "User Interviews",
            "Empathy Mapping",
            "Competitive Analysis",
            "Market Research",
          ]}
        />

        <ScrumBox
          title="Ideation"
          list={[
            "User Research",
            "User Interviews",
            "Empathy Mapping",
            "Competitive Analysis",
            "Market Research",
          ]}
        />
      </div>

      <div class="flex justify-center my-3">
        <ScrumBox
          title="Designing"
          list={[
            "User Research",
            "User Interviews",
            "Empathy Mapping",
            "Competitive Analysis",
            "Market Research",
          ]}
        />

        <ScrumBox
          title="Development"
          list={[
            "User Research",
            "User Interviews",
            "Empathy Mapping",
            "Competitive Analysis",
            "Market Research",
          ]}
        />
      </div>

      <div class="flex justify-center my-3">
        <ScrumBox
          title="Testing"
          list={[
            "User Research",
            "User Interviews",
            "Empathy Mapping",
            "Competitive Analysis",
            "Market Research",
          ]}
        />
      </div>
    </div>
    
  </div>