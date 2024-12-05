<script>
    // Profile data structure
    const profiles = [
      {
        id: 1,
        image: ' /person.svg',
        background: 'bg-slate-100'
      },
      {
        id: 2,
        image: '/academy/madam-1.svg',
        background: 'bg-stone-200'
      },
      {
        id: 3,
        image: '/academy/sir-2.svg',
        background: 'bg-gray-200'
      },
      {
        id: 4,
        image: '/academy/madam-2.svg',
        background: 'bg-red-100'
      }
    ];
  </script>
  
  <div class="">
    <div class="flex -space-x-3 mb-4  justify-start">
      {#each profiles as profile}
        <div class="relative">
          <div class="w-[50px] h-[50px] rounded-full overflow-hidden {profile.background} transition-transform hover:scale-105">
            <img
              src={profile.image}
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      {/each}
    </div>
  </div>